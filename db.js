const MongoClinet = require("mongodb").MongiClient;
const ObjectID = require("mongodb").ObjectID;
const dbname = "testdb";
const url = "your data base url goes here";
const mongoOptions = {useNewUrlParser : true};

const state = {
    db: null
};

const connect = (cb) =>{
    if(state.db){
        cb();
    }
    else{
        MongoClinet.connect(url.mongoOptions,(err,clinet)=>{
            if(err){
                cb(err);
            }
            else{
                state.db = clinet.db(dbname);
                cb();
            }
        })
    }
}

const getDB = ()=>{
    return state.db;
}
module.exports = {getDB,connect};