function Person(props) {
    return (
      <div class="person">
        <h1>{props.name}</h1>
        <p>{props.age}</p>
      </div>
    );
  }
  
  
  
  
  
  var app = (
    <div> 
      <Person name="Manu" age="28" />
      <Person name="Max" age="24" />
    </div>
  );
  
  ReactDOM.render(app, document.querySelector('#app'));