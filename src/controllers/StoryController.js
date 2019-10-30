const Story = require('../models/Story');

module.exports = {

  async index(request, response){
    const story = await Story.find({});

    return response.json(story);
  },

  async store(request, response){
    const { user_id } = request.body;
    const story = await Story.create({
      body,
      user: user_id
    });
  }
}