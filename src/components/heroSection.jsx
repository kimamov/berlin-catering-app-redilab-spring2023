import Image from 'next/image';
import bannerImage from '../images/Fatoush.jpg';


export default function HeroSection() {
  return (
    <div>
      <div className="container" style={{
        height: '100vh',        
        backgroundImage: `url("https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg")`,
        backgroundSize: 'cover',
        }}>
        
        <div className="text-wrapper">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          possimus tenetur fugit tempore in provident hic debitis mollitia!
          Voluptatem soluta sint error dolorum sequi voluptate quod quis nam
          aspernatur! Tempore?
        </div>
      </div>
    </div>
  );
}
