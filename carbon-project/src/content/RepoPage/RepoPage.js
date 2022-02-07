import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "./../../components/actions/cartActions";
import Recipe from "./../../components/Recipe";

const RepoPage = () => {
  return <div>REPO PAGE</div>;
};

export default RepoPage;

// class RepoPage extends Component {
//   handleRemove = (id) => {
//     //to remove the itm completely
//     this.props.removeItem(id);
//   };
//   //to add the quantity
//   handleAddQuantity = (id) => {
//     this.props.addQuantity(id);
//   };

//   //to subtarct from the quantity
//   handleSubtractQuantity = (id) => {
//     this.props.subtractQuantity(id);
//   };

//   render() {
//     let addedItems = this.props.items.length ? (
//       this.props.items.map((item) => {
//         return (
//           <li className="collection-item avatar" key={item.id}>
//             <div className="item-img">
//               <img src={item.img} alt={item.img} className="" />
//             </div>
//             <div className="item-desc">
//               <span className="title">{item.title}</span>
//               <p>{item.desc}</p>
//               <p>
//                 <br>Price: ${item.price}</br>
//               </p>
//               <p>
//                 <b>Quantity: {item.quantity}</b>
//               </p>
//               <div className="add-remove">
//                 <Link to="/cart">
//                   <i
//                     className="material-icons"
//                     onClick={() => {
//                       this.handleAddQuantity(item.id);
//                     }}
//                   >
//                     arrow_drop_up
//                   </i>
//                 </Link>
//                 <Link to="/cart">
//                   <i
//                     className="material-icons"
//                     onClick={() => {
//                       this.handleSubtractQuantity(item.id);
//                     }}
//                   >
//                     arrow_drop_down
//                   </i>
//                 </Link>
//               </div>
//               <button
//                 className="waves-effect waves-light btn pink remove"
//                 onClick={() => {
//                   this.handleRemove(item.id);
//                 }}
//               >
//                 Remove
//               </button>
//             </div>
//           </li>
//         );
//       })
//     ) : (
//       <p> You are yet to make a selection. Please add items to your cart</p>
//     );
//     return (
//       <div className="container">
//         <div className="cart">
//           <h5>You have ordered</h5>
//           <ul className="collection">{addedItems}</ul>
//         </div>
//         <Recipe />
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.addedItems,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeItem: (id) => {
//       dispatch(removeItem(id));
//     },
//     addQuantity: (id) => {
//       dispatch(addQuantity(id));
//     },
//     subtractQuantity: (id) => {
//       dispatch(subtractQuantity(id));
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(RepoPage);
