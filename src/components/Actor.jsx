import { useEffect, useState } from "react";
import { Button, Row, Col, Image, Tag } from "antd";
import styles from "../styles/Actor.module.css";

const Actor = ({ actores, setActores }) => {
  const [informacion, setInformacion] = useState([]);

  useEffect(() => {
    const obtenerInformacionApi = async () => {
      try {
        const url = `https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&language=en-US&page=1&include_adult=false&query=${actores}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setInformacion(resultado.results);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerInformacionApi();
  });

  return (
    <>
      {informacion.map((element) => (
        <div key={element.id}>
          <Row>
            <Col span={6} className={styles.containerActor}>
              <div className={styles.boton}>
                <Button type="primary" onClick={() => setActores("")}>
                  Regresar
                </Button>
              </div>

              <Image
                src={`https://image.tmdb.org/t/p/original/${element.profile_path}`}
                width={200}
              />
              <br />
              <h1>{element.name}</h1>

              {element.gender === 1 ? (
                <Tag color="magenta">Mujer</Tag>
              ) : (
                <Tag color="cyan">Hombre</Tag>
              )}
              <br />
              <br />

              <h3>Popularidad: {element.popularity}</h3>

              <br />
            </Col>
            <Col span={18} className={styles.containerPeliculas}>
              <h1>Peliculas : </h1>
              {element.known_for.map((pelis) => (
                <>
                  <h2 key={pelis.id}>{pelis.original_title} </h2>
                  <div className={styles.votes}>{pelis.vote_average}/10 ⭐</div>

                  <Image
                    src={`https://image.tmdb.org/t/p/original/${pelis.poster_path}`}
                    width={100}
                    alt='Poster de Pelicula'
                  />
                  <br />
                  <span className={styles.resumen}>{pelis.overview}</span>

                  <h3>Fecha de estreno : {pelis.release_date}</h3>
                  <br />
                </>
              ))}
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
};

export default Actor;
