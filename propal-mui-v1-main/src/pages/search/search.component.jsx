import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchCard from '../../components/cards/search-card.component';

const Search = () => {
  const { key } = useParams();
  const [searchObj, setSearchObj] = useState(null);

  useEffect(() => {
    const dumb = async () => {
      const data = await axios.get(
        `http://localhost:6969/property/search/${key}`
      );
      setSearchObj(data);
    };
    dumb();
  }, [key]);

  const result = searchObj?.data?.data.property;
  console.log('search-data', result);

  return (
    <>
      <Box sx={{ background: '#A8DADC', width: '100%' }}>
        <Box sx={{ margin: '0 0 2rem 0', padding: '2rem 6rem ' }}>
          <Typography
            variant='h4'
            component='h4'
            sx={{
              color: '#1d3557',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}
          >
            Showing result for:
            <Typography
              variant='h4'
              component='h4'
              sx={{
                color: '#1d3557',
                fontWeight: '500',
                textTransform: 'capitalize',
                display: 'inline-block',
                fontStyle: 'italic',
                m: '0 .5rem',
              }}
            >
              "{key}"
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mb: '4rem' }}>
        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              scrollBehavior: 'auto',
              flexBasis: '64%',
              padding: '0 0 0 6rem',
            }}
          >
            {result?.length !== 0 ? (
              result?.map((prop) => (
                <SearchCard
                  title={prop.title}
                  price={prop.price}
                  id={prop._id}
                  key={prop._id}
                />
              ))
            ) : (
              <Box
                sx={{
                  paddingTop: '5rem',
                  fontWeight: 'bold',
                  fontSize: '2rem',
                  color: '#1d3557',
                }}
              >
                Ops! No Results Found!
              </Box>
            )}
            {/* <SearchCard /> */}
          </Box>
          <Box sx={{ flexBasis: '35%' }}>
            <Typography variant='h4'>
              {/* Advertisments here */}
              <img
                src={require('./../../assets/img/banners/ad-1.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />

              {result?.length > 5 ? (
                <img
                  src={require('./../../assets/img/banners/ad-2.jpeg')}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              ) : (
                ''
              )}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Search;
