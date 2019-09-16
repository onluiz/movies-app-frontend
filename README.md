# Movies Frontend

Demo at: https://youthful-nightingale-9fcce1.netlify.com/

An ReactJS app to list and search movies.

The repository is organized as follows:

- `src/components` regular components without business logic
- `src/containers` components with business logic

Each of those folders has another folder called `css` to put our styles.

To run: `npm start`
To build: `npm run build`

I'm hosting the app at https://netlify.com. There is a file called `netlify.toml` so you can customize your settings.

Api calls are made with axios.

### Layout and Bulma.css

I did not want to add React libs unnecessary. I'm using pure css and Bulma.css.
Bulma.css is a framework easy-to-use, very simple and it is light.

### Unit tests

The project really needs unit tests, so it is open for contribution.