import RecipeThumbnail from "../Components/RecipeThumbnail";
import "./Home.css";

export default function Home() {
    return (
        <div className="home">
            <div className="tagline">
                <p>Cooking Made Simple, Delicious, and Fun!</p>
            </div>
            <RecipeThumbnail className="thumbnail chana-masala" pathName="/recipe" name="Chana Masala" img="chana_masala.jpeg" />
            <RecipeThumbnail className="thumbnail chicken-biryani" pathName="/recipe" name="Chicken Biryani" img="chicken_biryani.jpeg" />
            <RecipeThumbnail className="thumbnail tandoori-chicken" pathName="/recipe" name="Tandoori Chicken" img="tandoori_chicken.webp" />
            <RecipeThumbnail className="thumbnail masala-dosa" pathName="/recipe" name="Masala Dosa" img="masala_dosa.jpeg" />
            <RecipeThumbnail className="thumbnail gulab-jamun" pathName="/recipe" name="Gulab Jamun" img="gulab_jamun.jpeg" />
            <RecipeThumbnail className="thumbnail jalebi" pathName="/recipe" name="Jalebi" img="jalebi.jpeg" />
            <RecipeThumbnail className="thumbnail rasgulla" pathName="/recipe" name="Rasgulla" img="rasgulla.webp" />
            <RecipeThumbnail className="thumbnail ladoo" pathName="/recipe" name="Ladoo" img="ladoo.webp" />
        </div>
    )
}