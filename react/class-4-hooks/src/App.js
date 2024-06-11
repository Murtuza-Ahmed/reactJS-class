// const Pet = (props) => {
//     console.log('props', props)
//     return React.createElement(
//         "div",
//         {},
//         React.createElement("h1", {}, props.name),  //Jack , Scoby
//         React.createElement("h2", {}, props.animal),
//         React.createElement("h3", {}, props.breed),  // german , buldog
//     )
// }


// const App = () => {
//     return React.createElement(
//         "div",
//         {},
//         React.createElement("h1", {}, "Adopt Me!"),
//         React.createElement(Pet, {
//             name: "Luna",
//             animal: "Dog",
//             breed: "Havaneese"
//         }),
//         React.createElement(Pet, {

//             name: "Jacky",
//             fullName: "Chain",
//             animal: "Dog",
//             breed: "German Shepherd"
//         }),
//         React.createElement(Pet, {
//             name: "Scoby",
//             animal: "Dog",
//             breed: "Bul Dog"
//         }),
//     );
// };



// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));