import styles from './About.module.scss'
import {useScrollListener} from "../../hooks/useScrollListener";

export const About = ({ active, setActive }) => {

  useScrollListener('about', active, setActive)

  return (
    <div id="about" className={styles.about}>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dapibus
        fermentum ipsum. Etiam commodo dui eget wisi. Aenean placerat. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Maecenas sollicitudin. Sed convallis
        magna eu sem. Cras pede libero, dapibus nec, pretium sit amet, tempor
        quis. Aliquam in lorem sit amet leo accumsan lacinia. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Nulla turpis magna, cursus sit amet, suscipit a,
        interdum id, felis. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Suspendisse
        sagittis ultrices augue. In convallis. Aliquam in lorem sit amet leo
        accumsan lacinia. Etiam posuere lacus quis dolor. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
      </p>
      <p>
        Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat.
        Nam sed tellus id magna elementum tincidunt. Duis risus. Sed ut
        perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Suspendisse nisl. Duis
        bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget
        facilisis enim ipsum id lacus. Quis autem vel eum iure reprehenderit qui
        in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
        qui dolorem eum fugiat quo voluptas nulla pariatur? Maecenas libero.
        Phasellus et lorem id felis nonummy placerat. Integer rutrum, orci
        vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae
        placerat pede sem sit amet enim. Praesent id justo in neque elementum
        ultrices. Proin pede metus, vulputate nec, fermentum fringilla, vehicula
        vitae, justo. Nullam eget nisl. Aliquam ante. Sed ut perspiciatis unde
        omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Aliquam ante. Nullam
        sapien sem, ornare ac, nonummy non, lobortis a enim. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Aenean id metus id velit ullamcorper pulvinar.
      </p>
      <div>
        <h1>Order</h1>
        <div style={{ height: 600}}>Some form here</div>
      </div>
    </div>
  )
}
