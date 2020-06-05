const functions = require('firebase-functions'); 
const app = require('express')();
const { db } = require('./util/admin')
const FBAuth = require('./util/fbAuth');

const {
    postOneApoyo, 
    getAllApoyos, 
    getApoyo, 
    commentOnApoyo,
    likeApoyo,
    unlikeApoyo,
    deleteApoyo,
} = require('./handlers/apoyos');

const {
    signup, 
    login, 
    uploadImage, 
    getAuthenticatedUser
} = require('./handlers/users');

//Apoyos routes
app.post('/apoyo',FBAuth, postOneApoyo);
app.get('/apoyos', getAllApoyos);
app.get('/apoyo/:apoyoId', getApoyo)
app.get('/apoyo/:apoyoId/like', FBAuth, likeApoyo);
app.get('/apoyo/:apoyoId/unlike', FBAuth, unlikeApoyo);
app.post('/apoyo/:apoyoId/comment', FBAuth, commentOnApoyo);
app.delete('/apoyo/:apoyoId', FBAuth, deleteApoyo);

//Users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.get('/user', FBAuth, getAuthenticatedUser)

exports.api = functions.region('us-central1').https.onRequest(app);

exports.onUserImageChange = functions
  .region('us-central1')
  .firestore.document('/users/{userId}')
  .onUpdate((change) => {
    console.log(change.before.data());
    console.log(change.after.data());
    if (change.before.data().imageUrl !== change.after.data().imageUrl) {
      console.log('image has changed');
      const batch = db.batch();
      return db
        .collection('apoyos')
        .where('userHandle', '==', change.before.data().handle)
        .get()
        .then((data) => {
          data.forEach((doc) => {
            const apoyo = db.doc(`/apoyos/${doc.id}`);
            batch.update(apoyo, { userImage: change.after.data().imageUrl });
          });
          return batch.commit();
        });
    } else return true;
  });

exports.onApoyoDelete = functions
  .region('us-central1')
  .firestore.document('/apoyos/{apoyoId}')
  .onDelete((snapshot, context) => {
    const apoyoId = context.params.apoyoId;
    const batch = db.batch();
    return db
      .collection('comments')
      .where('apoyoId', '==', apoyoId)
      .get()
      .then((data) => {
        data.forEach((doc) => {
          batch.delete(db.doc(`/comments/${doc.id}`));
        });
        return db
          .collection('likes')
          .where('apoyoId', '==', apoyoId)
          .get();
      })
      .then((data) => {
        data.forEach((doc) => {
          batch.delete(db.doc(`/likes/${doc.id}`));
        });
      }).catch((err) => console.error(err));
  });