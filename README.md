# peloton-client-node

A node client for making requests to the Peloton API. _Currently a work in progress._

## Usage

```js
const { peloton } = require('peloton-client-node');

async function example() {
  await peloton.authenticate({
    username: 'your-peloton-username-or-email',
    password: 'your-peloton-password',
  });

  // Get your own personal information
  const myInfo = await peloton.me();

  // Get your workout info
  const myLast10Workouts = await peloton.workouts({
    limit: 10,
    page: 0,
  });
}

example();
```

## References

This was inspred from [this](https://github.com/geudrik/peloton-client-library) python library. And
the [API Docs](https://github.com/geudrik/peloton-client-library/blob/master/API_DOCS.md) from that
repo were super helpful in making this.