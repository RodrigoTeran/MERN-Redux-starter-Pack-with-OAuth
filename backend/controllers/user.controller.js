const usersCtrl = {};  // Our object that contains all methods

// Home
usersCtrl.menuBarProvider = (req, res) => {
  try {
    res.json({
      "username": req.user.username,
      "imgId": req.user.profileImg[0].imgId
    });
  } catch{
    res.json({
      "username": "",
      "imgId": ""
    });
  };
};
module.exports = usersCtrl;