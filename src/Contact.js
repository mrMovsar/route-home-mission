import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Contact = () => (
  
  <YMaps >
    Школа программирования "Интукод"<p/> г.Грозный, ул. Трошева, 7 <p/>
      <Map state={{ center: [43.324727, 45.692417], zoom: 14 }} width="100%" height="500px" >
        <Placemark geometry={[43.32472782067527,45.69241746197129]} />
      </Map>
      intocode 2021
  </YMaps>
 
);
  
export default Contact;