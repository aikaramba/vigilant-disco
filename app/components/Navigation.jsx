var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
  render: function(){
    return (
      <div className="top-bar">
         <div className="top-bar-left">
           <ul className="menu">
             <li className="menu-text">
               React Timer App
            </li>
             <li className="menu-text">
               <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
             </li>
             <li className="menu-text">
               <Link to="/" activeClassName="active-link">Countdown</Link>
             </li>
           </ul>
           </div>
           <div className="top-bar-right">
             <ul className="menu">
               <li className="menu-text">
                 Created by <a href="https://github.com/aikaramba" target="_blank">Andrew</a>
               </li>
            </ul>
          </div>
      </div>
    );
  }
});

module.exports = Navigation;

/*
<li className="title-text"><b>React Timer App</b></li>

<div className="top-bar-title">
  <strong>React Timer App</strong>
</div>




<div className="top-bar stacked-for-small">
  <div className="top-bar-title">
    <strong>React Timer App</strong>
  </div>
   <div className="top-bar-left">
     <ul className="menu">

       <li>
         <Link to="/" activeClassName="active">Timer</Link>
       </li>
       <li>
         <Link to="/" activeClassName="active">Countdown</Link>
       </li>
     </ul>
     </div>
     <div className="top-bar-right">
       <ul className="menu">
         <li className=""><span>Created by <a href="https://github.com/aikaramba">Andrew</a></span></li>
      </ul>
    </div>
</div>
*/
