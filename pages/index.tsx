import type { NextPage } from 'next'
import { OnlineContacts, LastActivity } from '../components';
import { withLayout } from '../layout/Layout';

const Home: NextPage = () => {
  return (
    <>
      <LastActivity />
      <OnlineContacts />
    </>
  )
}

export default withLayout(Home);
