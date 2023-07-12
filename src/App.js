import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useGetFeedDataQuery } from './redux/api';
import MainNavigation from './components/nav/MainNavigation';
import FeedList from './components/feed/FeedList';
import SearchByAuthor from './components/SearchByAuthor';
import Loading from './components/Loading';
import { api } from './redux/api';
import { sortBy } from './utils/utilities';

//Define the container for the Application
const ApplicationContainer = styled.div`
  min-height: 100vh;
  height: 100%;
`;

const MainContent = styled.main`
  padding: 0 1rem;
`;

const App = () => {
  const [posts, setPosts] = useState([]);
  const {
    data,
    isLoading,
    isSuccess
  } = useGetFeedDataQuery(undefined, { refetchOnMountOrArgChange: true });

  const [trigger, result] = api.endpoints.getFeedData.useLazyQuery();

  useEffect(() => {
    //Put data from query into state
    const unsortedData = result.isUninitialized ? [...(data || [])] : [...(result.data || [])];
    //Sort data by -created (reverse chronological), then author displayName (ascending)
    setPosts(unsortedData?.sort(sortBy('-created', 'author.displayName')));
  }, [data, result]);

  return (
    <ApplicationContainer>
      <MainNavigation />
      <MainContent>
        <SearchByAuthor queryByAuthor={trigger} />
        {isLoading && <Loading />}
        {isSuccess && <FeedList posts={posts} />}
      </MainContent>
    </ApplicationContainer>
  );
};

export default App;
