//const { Configuration, OpenAIApi } = require('openai')
// const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

// const configuration = new Configuration ({
//     apiKey:  process.env.OPEN_AI_KEY
// })

// const openai = new OpenAIApi(configuration)

const OpenAI = require('openai')
//import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY // This is also the default, can be omitted
});

module.exports = openai