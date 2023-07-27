import Card from "./card";
import {data} from "./data";

const Home = () => {
    return (
        <>
        {
            data.map((item ) => {
            return (

                <Card
                    key={item.id} 
                    item={data.title}
            />)
            })
        }

        </>
    )
}

export default Home;