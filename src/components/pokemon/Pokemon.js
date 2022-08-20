import React, {useEffect, useState} from "react";
import "./Pokemon.css";
import classes from "./pokemons.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

function Pokemon() {
    const[allPokemon, setAllPokemon] = useState([])
    const [more, setMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemon = async () => {
        setChoice(true)
        const res = await fetch(more)
        const data = await res.json()

        setMore(data.next)

        function createPokemonObject(results)  {
            results.forEach( async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data =  await res.json()
                setAllPokemon( currentList => [...currentList, data])
                await allPokemon.sort((a, b) => a.id - b.id)
            })
        }
        createPokemonObject(data.results)

        const inputs = document.getElementsByName("type");
        for (const i of inputs) {
            if (i.checked) {
                i.checked = false;
            }
        }
    }

    useEffect(() => {
        getAllPokemon();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [allType, setAllType] = useState([])
    const [choice, setChoice] = useState(true)

    const getAllType = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/type')
        const data = await res.json()

        function createTypeObject(results)  {
            setAllPokemon([])
            setMore('https://pokeapi.co/api/v2/pokemon?limit=20')
            setAllType([])
            const inputs = document.getElementsByName("type");
            for (const i of inputs) {
                if (i.checked) {
                    results.forEach( async type => {
                        if (i.id === type.name) {
                            setChoice(false)
                            const res = await fetch(`https://pokeapi.co/api/v2/type/${type.name}`)
                            const data =  await res.json()
                            function createTypePokemonObject(pokemon)  {
                                pokemon.forEach( async pokemon => {
                                    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon.name}`)
                                    const data =  await res.json()
                                    setAllType(currentList => [...currentList, data])
                                    await allType.sort((a, b) => a.id - b.id)
                                })
                            }
                            createTypePokemonObject(data.pokemon)
                        }
                    })
                }
            }
        }
        createTypeObject(data.results)
    }

    function id(pokemon) {
        return pokemon.id.toString().padStart(3, '0')
    }

    function name(pokemon) {
        return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    }

    function img(pokemon) {
        if (pokemon.sprites.other.dream_world.front_default === null) {
            return pokemon.sprites.front_default
        } else {
            return pokemon.sprites.other.dream_world.front_default
        }
    }

    function twoType(pokemon) {
        if (pokemon.types.length > 1) {
            return pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1) + " / " + pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1)
        } else {
            return pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)
        }
    }

    const [pokemonData, setPokemonData] = useState([])
    const [back, setBack] = useState(false);


    const changeData = async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemonData([data])
        setBack(true)
    }

    const showData = () => {
        setBack(false)
    }

    const [box1, setBox1] = useState(true);

    const changeType = () => {
        setBox1(!box1)
    }

    return (
        <div className={classes.box} id="pokemon">
            <div className={classes.sort}>
                <form className={classes.type}>
                    <div className={classes.title}>
                        <h4>Type</h4>
                        <FontAwesomeIcon icon={box1 ? faChevronUp : faChevronDown} className={classes.icon} onClick={changeType}/>
                    </div>
                    <div className={box1 ? "box1" : "box2"}>
                        <div className={classes.col}>
                            <input type="radio" id="normal" className={classes.input} name="type" value="1" onChange={() => getAllType()}/>
                            <label htmlFor="1">Normal</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="fighting" className={classes.input} name="type" value="2" onChange={() => getAllType()}/>
                            <label htmlFor="2">Fighting</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="flying" className={classes.input} name="type" value="3" onChange={() => getAllType()}/>
                            <label htmlFor="3">Flying</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="poison" className={classes.input} name="type" value="4" onChange={() => getAllType()}/>
                            <label htmlFor="4">Poison</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="ground" className={classes.input} name="type" value="5" onChange={() => getAllType()}/>
                            <label htmlFor="5">Ground</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="rock" className={classes.input} name="type" value="6" onChange={() => getAllType()}/>
                            <label htmlFor="6">Rock</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="bug" className={classes.input} name="type" value="7" onChange={() => getAllType()}/>
                            <label htmlFor="7">Bug</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="ghost" className={classes.input} name="type" value="8" onChange={() => getAllType()}/>
                            <label htmlFor="8">Ghost</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="steel" className={classes.input} name="type" value="9" onChange={() => getAllType()}/>
                            <label htmlFor="9">Steel</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="fire" className={classes.input} name="type" value="10" onChange={() => getAllType()}/>
                            <label htmlFor="10">Fire</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="water" className={classes.input} name="type" value="11" onChange={() => getAllType()}/>
                            <label htmlFor="11">Water</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="grass" className={classes.input} name="type" value="12" onChange={() => getAllType()}/>
                            <label htmlFor="12">Grass</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="electric" className={classes.input} name="type" value="13" onChange={() => getAllType()}/>
                            <label htmlFor="13">Electric</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="psychic" className={classes.input} name="type" value="14" onChange={() => getAllType()}/>
                            <label htmlFor="14">Psychic</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="ice" className={classes.input} name="type" value="15" onChange={() => getAllType()}/>
                            <label htmlFor="15">Ice</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="dragon" className={classes.input} name="type" value="16" onChange={() => getAllType()}/>
                            <label htmlFor="16">Dragon</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="dark" className={classes.input} name="type" value="17" onChange={() => getAllType()}/>
                            <label htmlFor="17">dark</label>
                        </div>
                        <div className={classes.col}>
                            <input type="radio" id="fairy" className={classes.input} name="type" value="18" onChange={() => getAllType()}/>
                            <label htmlFor="18">Fairy</label>
                        </div>
                    </div>
                </form>
            </div>
            <div className={classes.container}>
                <h2 className={choice ? "all" : "all2"} onClick={() => getAllPokemon()}>All Pokemon</h2>
                <div className={classes.pokemons}>
                    {
                        choice
                        ?
                        allPokemon.map((pokemon, key) =>
                            <div className={classes.pokemon} key={key} onClick={() => changeData(pokemon.id)}>
                               <h3 className={classes.id}>#{id(pokemon)}</h3>
                               <img src={img(pokemon)} alt="pokemon" className={classes.img}/>
                                <h2 className={classes.name}>{name(pokemon)}</h2>
                                <h4>Type: {twoType(pokemon)}</h4>
                            </div>
                        )
                        :
                        allType.map((pokemon, key) =>
                            <div className={classes.pokemon} key={key} onClick={() => changeData(pokemon.id)}>
                                <h3 className={classes.id}>#{id(pokemon)}</h3>
                                <img src={img(pokemon)} alt="No pokemon img" className={classes.img}/>
                                <h2 className={classes.name}>{name(pokemon)}</h2>
                                <h4>Type: {twoType(pokemon)}</h4>
                            </div>
                        )
                    }
                </div>
                <div className={classes.more}>
                    <button className={choice ? "btn" : "btn2"} onClick={() => getAllPokemon()}>More</button>
                </div>
            </div>
            <div className={back ? "back" : "back2"} id="back" onClick={() => showData()}>
                {pokemonData.map((pokemon, key) =>
                    <div className={classes.data} key={key}>
                        <h3 className={classes.id}>#{id(pokemon)}</h3>
                        <img src={img(pokemon)} alt="No pokemon img" className={classes.img}/>
                        <h2 className={classes.name}>{name(pokemon)}</h2>
                        <div className={classes.info}>
                            <h5>{twoType(pokemon)}</h5>
                            <p>Type</p>
                        </div>
                        <div className={classes.info}>
                            <h5>{pokemon.base_experience}xp</h5>
                            <p>Base experience</p>
                        </div>
                        <div className={classes.info}>
                            <h5>{pokemon.height}dm</h5>
                            <p>Height</p>
                        </div>
                        <div className={classes.info}>
                            <h5>{pokemon.weight}kg</h5>
                            <p>Weight</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Pokemon;