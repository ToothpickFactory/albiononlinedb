function errRes(err, res){
  if(err.status && err.msg){
    res.status(err.status).send(err.msg);
  } else {
    res.status(400).send(err);
  }
}

module.exports = errRes;
