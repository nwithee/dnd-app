import React from 'react';

function Characters() {

    return (
        <section>
            <div className = "card">
                <a className ="card-hover">
                    <div className ="list-group list-group-flush d-flex justify-content-between">
                        <img className = "img-thumbnail" src = {require(`../../assets/charimages/dwarf.jpeg`)}></img>
                        <div className="list-group-item">Name: Bertrand</div>
                        <div className="list-group-item">Level: 2</div>
                        <div className="list-group-item">Class: Fighter</div>
                        <div className="list-group-item">Race: Dwarf</div>
                    </div>
                </a>
            </div>
            <div className = "card">
                <a className ="card-hover">
                    <div className ="list-group list-group-flush d-flex justify-content-between">
                        <img className = "img-thumbnail" src = {require(`../../assets/charimages/wood-elf.jpeg`)}></img>
                        <div className="list-group-item">Name: Bernard</div>
                        <div className="list-group-item">Level: 5</div>
                        <div className="list-group-item">Class: Ranger</div>
                        <div className="list-group-item">Race: Elf</div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Characters;