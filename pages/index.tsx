import type { NextPage } from 'next';
import { useState } from 'react';
import { OnlineContacts, LastActivity, PostField, PostFriends, Stories, Articles, Modal } from '../components';
import { withLayout } from '../layout/Layout';
import { store } from "../redux/store";
import { Provider } from "react-redux";

const Home: NextPage = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Provider store={store}>
      <div className='bodyInner'>
        <LastActivity />
        <OnlineContacts />
      </div>
      <div className='bodyInner'>
        <PostField setOpen={setOpen} />
        <PostFriends />
        <Modal open={open} setOpen={setOpen}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis maxime non cumque neque dolorem porro nam, provident illo animi quia, quasi culpa molestias expedita officia delectus! Architecto perferendis ut minima.</Modal>
      </div>
      <div className='bodyInner'>
        <Stories />
        <Articles />
      </div>
    </Provider>
  );
}

export default withLayout(Home);
