
BlxAnimate('#loading-logo')
  .excute(function(_this){
    console.log('执行');
    _this.next();
  })
  .animate('shake')
  .branch(

    BlxAnimate('#loading-page')
      .excute(function(_this){
        console.log('分支执行');
        _this.next();
      })
      .delay(1000)
      .animate('shake')
      .animate('tada')
      .excute(function(_this){
        console.log('分支结束');
        _this.next();
      })

  )
  .animate('tada')
  .delay(1000)
  .animate('wobble')
  .animate('shake')
  .excute(function(_this){
    console.log('结束');
    _this.next();
  })
  .run()
