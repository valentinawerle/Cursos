import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

    //console.log(title);

    

    return( 
    <> 
        <h1>{ title }</h1>
        {/*<code>{JSON.stringify(newMessage)}</code>*/}
        <p>{ subTitle}</p>
        <p>{ name }</p>
    </>

    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: "No hay titulo",
    subTitle:"no hay subtitulo",
    name: "Valen"

}