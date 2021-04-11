const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://caitlinsolo:soloprojmongo@scripts.szzql.mongodb.net/Scripts?retryWrites=true&w=majority';
// TODO change over to SQL database to make relation between user and scripts
// TODO create .env to hide URI 
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Scripts'
})
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const scriptSchema = new Schema({
  title: String,
  writer: String,
  feature: String,
  story_idea: Number,
  plot_structure: Number,
  characters: Number,
  dialogue: Number,
  setting_visual: Number,
  // genres: String,
  // sub_by: String,
  // rep: String,
  // reader: String,
  // eval: Number
  score: String
});

const Script = mongoose.model('script', scriptSchema);

module.exports = {Script};