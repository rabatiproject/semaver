const vorpal = require('vorpal')();

vorpal.show();
let currentVersion="v1.23.4";

vorpal
  .command('semaver [otherThings...]', 'Orders a type of food.')
  .option('-mj, --major', 'Increase Major Version')
  .option('-mn, --minor', 'Increase Minor Version')
  .option('-pc, --patch', 'Increase Patch Version')
  .action(function(args, cb){
    if(Object.keys(args.options).length===0){
      this.log(currentVersion);
    }else{
      if('-mj' in args.option || '--major' in args.option){
        this.log('increaseing major version')
      }
    }
    cb();
  });
