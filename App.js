/**
 * <div id ="parent">
 *      <div id= "child">
 *              <h1> I am h1</h1>
 *              <h2> I ma H2</h2>
 *      </div>
 * </div>
 *  <div id ="parent2">
 *      <div id= "child2">
 *              <h1> I am h1</h1>
 *              <h2> I ma H2</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement( "div", {id: "parent"},
                    React.createElement("div", {id: "child"}, 
                    [React.createElement("h1", {id: "h11"}, "I am h1 tag"),
                    React.createElement("h2", {id: "h11"}, "I am h2 tag"),
                ]),
                React.createElement("div", {id: "child2"}, 
                [React.createElement("h1", {id: "h112"}, "I am h1 tag"),
                React.createElement("h2", {id: "h112"}, "I am h2 tag"),
            ]));
//const heading = React.createElement("h1", { id: "heading", attrbute2: "test" }, "Hello React I will conquer you");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);