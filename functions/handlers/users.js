const { admin, db } = require('../util/admin');
const config = require('../util/config');

const firebase = require('firebase');
firebase.initializeApp(config);

const {
    validateSignupData,
    validateLoginData,
  } = require("../util/validators");

// Sign users up
exports.signup = (request, response) => {
    const newUser = {
      email: request.body.email,
      password: request.body.password,
      confirmPassword: request.body.confirmPassword,
      handle: request.body.handle,
    };
    
    const { valid, errors } = validateSignupData(newUser);
  
    if (!valid) return response.status(400).json(errors);
  
    const noImg = "no-img.png";
  
    let token, userId;
    db.doc(`/users/${newUser.handle}`).get().then((doc) => {
        if (doc.exists) {
          return response.status(400).json({ handle: "this handle is already taken" });
        } else {
          return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
        }
      }).then((data) => {
          userId = data.user.uid;
          return data.user.getIdToken();
      }).then((idToken) => {
          token = idToken;
          const userCredentials = {
            handle: newUser.handle,
            email: newUser.email,
            createdAt: new Date().toISOString(),
            //TODO Append token to imageUrl. Work around just add token from image in storage.
            imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
            userId
          };
          return db.doc(`/users/${newUser.handle}`).set(userCredentials);
      }).then(() => {
          return response.status(201).json({ token });
      }).catch((err) => {
          console.error(err);
          if (err.code === "auth/email-already-in-use") {
            return response.status(400).json({ email: "Email is already is use" });
          } else {
            return response.status(500).json({ general: "Something went wrong, please try again" });
          }
      });
  };



  // Log user in
  exports.login = (request, response) => {
    const user = {
      email: request.body.email,
      password: request.body.password,
    };
  
    const { valid, errors } = validateLoginData(user);
  
    if (!valid) return response.status(400).json(errors);
  
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        return data.user.getIdToken();
      })
      .then((token) => {
        return response.json({ token });
      })
      .catch((err) => {
        console.error(err);
        // auth/wrong-password
        // auth/user-not-user
        return response
          .status(403)
          .json({ general: "Wrong credentials, please try again" });
      });
  };

  exports.uploadImage = (req, res) => {
  const BusBoy = require("busboy");
  const path = require("path");
  const os = require("os");
  const fs = require("fs");

  const busboy = new BusBoy({ headers: req.headers });

  let imageToBeUploaded = {};
  let imageFileName;
  // String for image token
 

  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
    console.log(fieldname, file, filename, encoding, mimetype);
    if (mimetype !== "image/jpeg" && mimetype !== "image/png") {
      return res.status(400).json({ error: "Wrong file type submitted" });
    }
    // my.image.png => ['my', 'image', 'png']
    const imageExtension = filename.split(".")[filename.split(".").length - 1];
    // 32756238461724837.png
    imageFileName = `${Math.round(
      Math.random() * 1000000000000
    ).toString()}.${imageExtension}`;
    const filepath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = { filepath, mimetype };
    file.pipe(fs.createWriteStream(filepath));
  });
  busboy.on("finish", () => {
    admin
      .storage()
      .bucket()
      .upload(imageToBeUploaded.filepath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype
            //Generate token to be appended to imageUrl

          },
        },
      })
      .then(() => {
        // Append token to url
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
        return db.doc(`/users/${req.user.handle}`).update({ imageUrl });
      })
      .then(() => {
        return res.json({ message: "image uploaded successfully" });
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).json({ error: "something went wrong imagen" });
      });
  });
  busboy.end(req.rawBody);
};


exports.getAuthenticatedUser = (req, res) => {
  let userData = {};
  db.doc(`/users/${req.user.handle}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData.credentials = doc.data();
        return db
          .collection("likes")
          .where("userHandle", "==", req.user.handle)
          .get();
      }
    })
    .then((data) => {
      userData.likes = [];
      data.forEach((doc) => {
        userData.likes.push(doc.data());
      });
      return res.json(userData);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

/*INTENTO FALLIDO DE GOOGLE

exports.signup = (request, response) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    var db = firebase.firestore();
    firebase.auth().signInWithPopup(provider).then((result) =>{
        var emailOri = result.user.email.split('@').pop();
        var emailOri2 = emailOri.substring(0,emailOri.length-3)
    
        if(emailOri2 === "itesm" || emailOri2 === "tec"){
            console.log("Succesfull login")
            console.log(result.user)
            db.collection('usuarios').doc(result.user.uid).set({
                nombre: result.user.displayName,
                userId: result.user.uid,
                createdAt: new Date().toISOString(),
                handle: emailOri.substring(0, 9)
            });
        }
        else{
            firebase.auth().currentUser.delete()
            console.log("No es valido, usa uno del tec perro")
        }
        return result.credential.accessToken;

    }).then((token) => {
        return response.json({ token });
        })
        .catch((err) => {
        console.error(err);
        return response
            .status(403)
            .json({ general: "Hubo un error intentalo otravez" });
        });  
  }*/