import React from 'react'
import ability1 from '../img/icons/ability1.png'
import ability2 from '../img/icons/ability2.png'
import ability3 from '../img/icons/ability3.png'

function Abilities(){

return(
        <section className="abilities">
            <div className="abilities-card">
                <img className="abilities-img" src={ability1} alt="Ability icon with syringe"/>
                <h2 className="abilities-title">Тактическое умение</h2>
                <h3 className="abilities-sub-title">Стимулятор</h3>
                <p className="abilities-text">Увеличивает скорость движения на 30% на 6 сек, но тратит здоровье при
                    активации</p>
            </div>
            <div className="abilities-card">
                <img className="abilities-img" src={ability2} alt="Ability icon with spin and white cross"/>
                <h2 className="abilities-title">Пассивное умение</h2>
                <h3 className="abilities-sub-title">Регенерация</h3>
                <p className="abilities-text">Постепенно восстанавливает здоровье вне боя</p>
            </div>
            <div className="abilities-card">
                <img className="abilities-img" src={ability3} alt="Ability icon with jump pad"/>
                <h2 className="abilities-title">Ультимейт</h2>
                <h3 className="abilities-sub-title">Батут</h3>
                <p className="abilities-text">Размещает портативный батут, который подбрасывает союзников в воздух</p>
            </div>
        </section>
)

}

export default Abilities