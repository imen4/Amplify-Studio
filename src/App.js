import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Post } from './models';
import { MyForm } from './ui-components'


function App() {
  async function create() {
    const posts = await DataStore.save(
      new Post({
      "title": "Lorem ipsum dolor sit amet",
      "comments": [],
      "content": "Lorem ipsum dolor sit amet"
      })
    );
    console.log('posts: ', posts)
  }
  create();
  return (
    <div>
     <MyForm
    onSubmit={fields => console.log(fields)}
    />
    </div>
  );
}

export default App;
