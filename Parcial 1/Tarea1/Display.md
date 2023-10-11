# **Propiedad Display** 

### Santos Andres Cervantes Juarez
### Programacion WEB

La propiedad CSS display especifica si un elemento es tratado como block or inline element y el diseño usado por sus hijos.

Formalmente la propiedad display establece los tipos de visualización interna y externa de un elemento. La tipo externa establece la participacion de un elemento en flow layout; la tipo interna establece el layout(Diseño) de los hijos. Algunos valores de display estan totalmente definidos con sus especificaciones propias; por ejemplo el detalle de que pasa cuando display: flex es declarado y definido en la especificacion de Modelo Flexible de Caja(Flexible Box Model specification) de CSS. Vea la siguientes tablas para mas especificaciones individuales.

Además de los Diferentes Tipos de caja de Visualizacion, el valor de none permite Desactivar la Visualizacion DE UN Elemento; cuando no se utiliza none, todos los elementos descendentes también quedan desactivados. El documento se procesa como si el elemento no existiera en el árbol de documentos.

```Css
/ * Valores <display-outside> * /

display: block;
display: inline;
display: run-in;

/ * Valores <display-inside> * /
display: flow;
display: flow-root;
display: table;
display: flex;
display: grid;
display: ruby;
display: subgrid;

/ * Valores <display-outside> más valores <display-inside> * /
display: block flow;
display: inline table;
display: flex run-in;

/ * Valores <display-listitem> * /
display: list-item;
display: list-item block;
display: list-item inline;
display: list-item flow;
display: list-item flow-root;
display: list-item block flow;
display: list-item block flow-root;
display: flow list-item block;

/ * Valores <display-internal> * /
display: table-row-group;
display: table-header-group;
display: table-footer-group;
display: table-row;
display: table-cell;
display: table-column-group;
display: table-column;
display: table-caption;
display: ruby-base;
display: ruby-text;
display: ruby-base-container;
display: ruby-text-container;

/ * Valores <display-box> * /
display: contents;
display: none;

/ * Valores <display-legacy> * /
display: inline-block;
display: inline-table;
display: inline-flex;
display: inline-grid;

/ * Valores globales * /
display: heredar;
display: initial;
display: unset;
```