const { db } = require('../util/admin')

exports.getAllApoyos = (request, response)=> {
    db.collection('apoyos').orderBy('createdAt', 'desc').get().then(data =>{
        let apoyos = [];
        data.forEach(doc => {
            apoyos.push({
                apoyoId: doc.id,
                body: doc.data().body,
                userHandle: doc.data().userHandle,
                createdAt: doc.data().createdAt,
                commentCount: doc.data().commentCount,
                likeCount: doc.data().likeCount,
                userImage: doc.data().userImage
            });
        });
        return response.json(apoyos)
    }).catch(error => {
        console.error(error);
        response.status(500).json({error: error.code});
    });
}

exports.postOneApoyo = (request,response)=>{
    if(request.body.body.trim() === ''){
        return response.status(400).json({body: "Body must not be empty"})
    }
    const newApoyo = {
        body: request.body.body,
        userHandle: request.user.handle,
        userImage: request.user.imageUrl,
        createdAt: new Date().toISOString(),
        likeCount: 0,
        commentCount: 0
    };

    db.collection('apoyos').add(newApoyo).then((doc) =>{
        const resApoyo = newApoyo;
        resApoyo.apoyoId = doc.id;
        response.json(resApoyo);
    }).catch((error) =>{
        response.status(500).json({error: 'Something went wrong'});
        console.error(error);
    })
}

exports.getApoyo = (request, response)=>{
    let apoyoData = {};
    db.doc(`/apoyos/${request.params.apoyoId}`).get().then(doc =>{
        if(!doc.exists){
            return response.status(404).json({comment: "Apoyo not found for comment"})
        }
        apoyoData = doc.data();
        apoyoData.apoyoId = doc.id;
        return db.collection("comments").orderBy('createdAt', 'desc').where('apoyoId', '==', request.params.apoyoId).get();
    }).then(data =>{
        apoyoData.comments = [];
        data.forEach(doc =>{
            apoyoData.comments.push(doc.data())
        });
        return response.json(apoyoData);
    }).catch(error=>{
        console.error(error);
        response.status(500).json({error: error.code})
    })
}

exports.commentOnApoyo = (request, response)=>{
    if(request.body.body.trim() === '' ) return response.status(400).json({error: "Must not be empty"});

    const newComment = {
        body: request.body.body,
        createdAt: new Date().toISOString(),
        apoyoId: request.params.apoyoId,
        userHandle: request.user.handle,
        userImage: request.user.imageUrl
    };

    db.doc(`/apoyos/${request.params.apoyoId}`).get().then(doc =>{
        if(!doc.exists){
            return response.status(404).json({error : "Apoyo not found"});
        }
        return doc.ref.update({ commentCount: doc.data().commentCount + 1 });
    }).then(() => {
        return db.collection('comments').add(newComment);
    }).then(()=>{
        response.json(newComment);
    }).catch((error)=>{
        console.log(error);
        response.status(500).json({error: "Something went wrong while commenting"})
    })
}


// Like apoyo
exports.likeApoyo = (request, response) => {
    const likeDocument = db
      .collection('likes')
      .where('userHandle', '==', request.user.handle)
      .where('apoyoId', '==', request.params.apoyoId)
      .limit(1);
  
    const apoyoDocument = db.doc(`/apoyos/${request.params.apoyoId}`);
  
    let apoyoData;
  
    apoyoDocument
      .get()
      .then((doc) => {
        if (doc.exists) {
          apoyoData = doc.data();
          apoyoData.apoyoId = doc.id;
          return likeDocument.get();
        } else {
          return response.status(404).json({ error: 'apoyo not found' });
        }
      })
      .then((data) => {
        if (data.empty) {
          return db
            .collection('likes')
            .add({
              apoyoId: request.params.apoyoId,
              userHandle: request.user.handle
            })
            .then(() => {
              apoyoData.likeCount++;
              return apoyoDocument.update({ likeCount: apoyoData.likeCount });
            })
            .then(() => {
              return response.json(apoyoData);
            });
        } else {
          return response.status(400).json({ error: 'apoyo already liked' });
        }
      })
      .catch((err) => {
        console.error(err);
        response.status(500).json({ error: err.code });
      });
  };
  

  // Unlike apoyo
  exports.unlikeApoyo = (request, response) => {
    const likeDocument = db
      .collection('likes')
      .where('userHandle', '==', request.user.handle)
      .where('apoyoId', '==', request.params.apoyoId)
      .limit(1);
  
    const apoyoDocument = db.doc(`/apoyos/${request.params.apoyoId}`);
  
    let apoyoData;
  
    apoyoDocument
      .get()
      .then((doc) => {
        if (doc.exists) {
          apoyoData = doc.data();
          apoyoData.apoyoId = doc.id;
          return likeDocument.get();
        } else {
          return response.status(404).json({ error: 'Apoyo not found' });
        }
      })
      .then((data) => {
        if (data.empty) {
          return response.status(400).json({ error: 'Apoyo not liked' });
        } else {
          return db
            .doc(`/likes/${data.docs[0].id}`)
            .delete()
            .then(() => {
              apoyoData.likeCount--;
              return apoyoDocument.update({ likeCount: apoyoData.likeCount });
            })
            .then(() => {
              response.json(apoyoData);
            });
        }
      })
      .catch((err) => {
        console.error(err);
        response.status(500).json({ error: err.code });
      });
  };


  //Delete apoyo
  exports.deleteApoyo = (req, res) => {
    const document = db.doc(`/apoyos/${req.params.apoyoId}`);
    document
      .get()
      .then((doc) => {
        if (!doc.exists) {
          return res.status(404).json({ error: 'Apoyo not found' });
        }else{
            return document.delete();
        }
      })
      .then(() => {
        res.json({ message: 'Apoyo deleted successfully' });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: err.code });
      });
    };