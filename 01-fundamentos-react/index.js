const root = document.getElementById("root");
const p = React.createElement("p", null, "Olá, mundo");
const reactRoot = ReactDom.createRoot(root);

reactRoot.render(p);
