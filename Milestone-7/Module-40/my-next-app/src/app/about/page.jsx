import Image from "next/image";
import himel from "../../assets/images/hello.jpg"

const AboutPage = () => {
    return (
        <div>
            <h2>This is About page</h2>
            <Image width="500" height="300" src="/himel.jpg" alt="himel pic"></Image>

            <Image width="300" height="500" src={himel}  alt="himel vai" ></Image>
        </div>
    );
};

export default AboutPage;