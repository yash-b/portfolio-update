import './stylesheets/home.css';
export default function Home() {

  // const [nav, setNav] = useState(false);

  // let isExpanded = document.querySelector("button");

  // console.log(isExpanded);
  // if (isExpanded === true) {
  //   console.log('shift things');
    // const divs = document.querySelectorAll('.div');
    // divs.forEach(div => {
    //   div.style.paddingLeft = '50px';
    // });
  // } else {
  //   console.log('do not shift things');
  // }

  return (
    <div className='container title-name'>
      <div className='row'>
        <div className='col-3'>
          {/* <img src='/yash-image.jpg' className='my-image'/> */}
          <p>Photoooooooooooooooooooooooooooooooooooooooooooooo</p>
        </div>
        <div className='col-9 name'>
          <p>Hi, I am <strong>Yash</strong></p>
        </div>
        <div className='row'>
          <div className='row'>
            <div className='row'>
              <div className='col-3'>
                <p>Yeet</p>
              </div>
              <div className='col-3'>
                <p>Yeet</p>
              </div>
              <div className='col-3'>
                <p>Yeet</p>
              </div>
              <div className='col-3'>
                <p>Yeet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
