import './Menu.component.css'
import pizza from '../../assets/image/pizzaitem2.jpg'
const Menu = () => {
    return (
        <div className="Menu">
            <nav className='navMenu'>
                <div>ALL</div>
                <div>DRINKS</div>
                <div>SALADS</div>
                <div>PASTA</div>
                <div>BURGERS</div>
                <div>DESERTS</div>
                <div>PIZZAS</div>
            </nav>
            <div className="list">
                <div className="image" style={{ backgroundImage: `url(${pizza})` }}></div>
                <div className="item">

                    <div className="title"><h1>Pizza</h1> <h1>$50</h1></div>

                    <div className="contain">
                    <hr></hr>
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Eos, temporibus eaque, ad voluptas ducimus nostrum
                            sunt culpa aliquam natus, suscipit facilis.
                        </p>
                    </div>
                </div>
            <div className="list">
                <div className="image" style={{ backgroundImage: `url(${pizza})` }}></div>
                <div className="item">

                    <div className="title"><h1>Pizza</h1> <h1>$50</h1></div>

                    <div className="contain">
                    <hr></hr>
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Eos, temporibus eaque, ad voluptas ducimus nostrum
                            sunt culpa aliquam natus, suscipit facilis.
                        </p>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="image" style={{ backgroundImage: `url(${pizza})` }}></div>
                <div className="item">

                    <div className="title"><h1>Pizza</h1> <h1>$50</h1></div>

                    <div className="contain">
                    <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Eos, temporibus eaque, ad voluptas ducimus nostrum
                            sunt culpa aliquam natus, suscipit facilis.
                        </p>
                    </div>
                
                </div>
                </div>
            </div>
        </div>);
}
export default Menu;
