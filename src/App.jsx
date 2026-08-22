import './App.css'
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';

function App() {

  const descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

  const creators = [
      {'id':'1', 
      'name': 'Drew Afualo',
      'url':'https://www.instagram.com/drewafualo', 
      'description': descr,
      'imageURL': 'https://www.instyle.com/thmb/8BaUnQjVRjSeod0imC2MxyQ8BDA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/250812-Drew-Afualo-RR-1-lead-23d4f2e06dd04428824853ece7aee985.jpg'},
      {'id':'2', 
      'name': 'Caleb Hearon',
      'url':'https://www.instagram.com/calebsaysthings',
      'description':descr,
      'imageURL': 'https://www.earwolf.com/wp-content/uploads/2020/04/Caleb-Hearon.jpg'},
      {'id':'3', 
      'name': 'Brittany Broski',
      'url':'https://www.youtube.com/brittany_broski',
      'description':descr,
      'imageURL': 'https://media.vanityfair.com/photos/69a9bff92442f3706e7bdc93/master/w_2560%2Cc_limit/03_Britney_GH_AttachedxVF_LA_0275_.jpg'},
      {'id':'4', 
      'name': 'Julien Solomita',
      'url':'https://www.youtube.com/jsolo',
      'description':descr,
      'imageURL': 'https://images.squarespace-cdn.com/content/v1/5faee21c90a41a74ef33d555/1605809519145-L51PASYBKD417M7U0JY7/DSC06341+2.jpeg'},
  ]

  return (
    <div className="App">
    </div>
  )
}

export default App;
