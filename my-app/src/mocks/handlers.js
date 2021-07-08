import { rest } from 'msw';

// const initialMoviesUrl =
//   'https://api.themoviedb.org/3/discover/movie?api_key=bb2b538ec7dc87a9a9ecaa9065c3baff&language=en&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=&primary_release_date.gte=&primary_release_date.lte=&page=1&with_watch_monetization_types=flatrate';

export const handlers = [
  rest.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=bb2b538ec7dc87a9a9ecaa9065c3baff&language=en&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=&primary_release_date.gte=&primary_release_date.lte=&page=1&with_watch_monetization_types=flatrate',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ results: [], total_pages: 100 }));
    }
  ),
  rest.get(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=bb2b538ec7dc87a9a9ecaa9065c3baff&language=en',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          genres: [
            { id: 28, name: 'Action' },
            { id: 12, name: 'Adventure' },
          ],
        })
      );
    }
  ),
];
