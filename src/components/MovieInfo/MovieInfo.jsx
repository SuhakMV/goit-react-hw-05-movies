import { BoxInfo, TextBox, Title, Text } from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  const posterURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const date = () => new Date(`${release_date}`).getFullYear();

  return (
    <>
      <BoxInfo>
        <img src={posterURL} alt={original_title} width="300" />
        <TextBox>
          <Title>
            {original_title} ({date()})
          </Title>
          <Text>User Score: {Math.round(vote_average * 10)}%</Text>
          <Text>Overview</Text>
          <Text>{overview}</Text>
          <Text>Genres</Text>
          <Text>{genres?.map(genre => genre.name).join(', ')}</Text>
        </TextBox>
      </BoxInfo>
    </>
  );
};
