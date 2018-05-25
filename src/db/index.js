import faker from 'faker';

let data = [
  {
    id: 1,
    avatar_url:
      'https://pbs.twimg.com/profile_images/689189555765784576/3wgIDj3j_bigger.png',
    full_name: 'Heroku',
    username: '@heroku',
    posted_at: '9:30 PM - 24 May 2018',
    title:
      'Announcing Heroku CLI Autocomplete for #Bash and #Zsh: complete #CLI commands, flags & values with a single <tab> s://hrku.co/HDVpsd ',
    image_url:
      'https://heroku-blog-files.s3.amazonaws.com/posts/1527157317-cli-autocomplete-launch-blog.gif',
    retweets_count: 19,
    likes_count: 65,
    comments_count: 8,
  },
  {
    id: 2,
    avatar_url:
      'https://pbs.twimg.com/profile_images/974606119598526464/zY8xtnio_bigger.jpg',
    full_name: 'Juri Strumpflohner',
    username: '@heroku',
    posted_at: '9:30 PM - 24 May 2018',
    title:
      'Did you know: you can use Ctrl+Shift+O (Cmd+Shift+O on macOS) to navigate between JS functions of the current file 👍',
    image_url: 'https://pbs.twimg.com/media/Dd8t2VYVQAEM8Mk.jpg',
    retweets_count: 37,
    likes_count: 52,
    comments_count: 2,
  },
];

for (var i = 3; i <= 13; i++) {
  data.push({
    id: i,
    avatar_url: faker.image.avatar(),
    full_name: faker.name.findName(),
    username: faker.internet.userName(),
    posted_at: faker.date.past(),
    title: faker.lorem.paragraph(),
    image_url: faker.image.image(),
    retweets_count: faker.random.number(),
    likes_count: faker.random.number(),
    comments_count: faker.random.number(),
  });
}

export default data;
