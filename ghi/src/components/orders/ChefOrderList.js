import { useSelector } from "react-redux"
import { useGetAllOrdersQuery, useUpdateOrderMutation } from "../../features/orders/orderApi"
import React, { useState } from "react";
import SideBar from '../../SideBar';


function ChefOrderList() {
    const chefId = useSelector((state) => state.auth.userInfo.id);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const { data: orders, isLoading } = useGetAllOrdersQuery(chefId);
    const [filterStatus, setFilterStatus] = useState(null);
    const [showAllOrders, setShowAllOrders] = useState(false);
    const [updateOrder] = useUpdateOrderMutation();
    const canSave=!isLoading

    if(isLoading){
        return <p>Loading...</p>
    }

    const getStatus = (status) => {
        switch (status) {
        case 1:
            return "SUBMITTED"
        case 2:
            return "CONFIRMED";
        case 3:
            return "READY FOR PICKUP";
        case 4:
            return "COMPLETED";
        case 5:
            return "DECLINED";
        default:
        return "UNKNOWN";
        }
    };
    const handleUpdateOrder = async (order, value) => {
          if (canSave) {
              try {

                      const items = order.shopping_cart.map(item => {
                          return {
                              photo: item.photo,
                              name: item.name,
                              price: item.price,
                              quantity: item.quantity
                          }
                      });

                      const updatedOrder = {
                          order_id: order.order_id,
                          order_date: order.order_date,
                          status: value,
                          shopping_cart: items
                      }
                      await updateOrder(updatedOrder).unwrap();

              } catch (error) {
                  console.log(error);
              };
          }
      };


    const handleButtonClick = (order, value) => {
        setSelectedOrder(order);
        handleUpdateOrder(order, value);
    };

   const handleFilterButtonClick = (status) => {
    if (status === null) {
        setShowAllOrders(true);
        setFilterStatus(null);
    }  else {
        setFilterStatus(status);
        setShowAllOrders(false);
    }
};


    const filteredOrders = orders.filter(order => order.chef_id === parseInt(chefId));

    let filteredStatusOrders = filteredOrders;
      if (filterStatus !== null) {
          filteredStatusOrders = filteredOrders.filter(order => order.status === filterStatus);
      }


  return (

  <div>
    <div>
      <SideBar/>
    </div>
    <div style={{ flex: 2 }}>
    <div data-theme="garden" className="bg-white flex flex-col items-center justify-center h-full font-sans" style={{marginTop:'-300px', marginBottom:"500px"}}>
        <h1>My Orders</h1>
          <div className="mb-4">
            <button
              className={`btn ${showAllOrders ? "active" : ""}`}
              onClick={() => handleFilterButtonClick(null)}
            > All Orders</button>
            <button
              className={`btn btn-primary ${showAllOrders ? "active" : ""}`}
              onClick={() => handleFilterButtonClick(1)}
            > Needs Confirmation</button>
            <button
              className={`btn btn-secondary ${filterStatus === 3  ? "active" : ""}`}
              onClick={() => handleFilterButtonClick(3)}
              >Ready For pickup</button>
            <button
              className={`btn btn-accent ${filterStatus === 4 ? "active" : ""}`}
              onClick={() => handleFilterButtonClick(4)}
              >Completed</button>
          </div>
          <div className="flex-grow overflow-y-auto">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
                  {orders ? (
                    <tbody>
                      {filteredStatusOrders
                        .filter((order) => getStatus(order.status) !== "DECLINED")
                        .sort((a, b) => {
                          if (a.status !== b.status) {
                            return a.status - b.status;
                          }
                          return new Date(a.order_date) - new Date(b.order_date);
                        })
                        .map((order) =>
                          order.shopping_cart.map((item, index) => (
                            <tr
                              key={`${order.order_id}-${item.name}-${index}`}
                              className={
                                selectedOrder && selectedOrder.order_id === order.order_id
                                  ? "table-info"
                                  : ""
                              }
                            >
                              <td>
                                <img src={item.photo} alt={item.photo} style={{ maxWidth: "100px" }}
                          /></td>
                              {index === 0 ? (
                                <>
                                  <td>{item.name}</td>
                                  <td>{item.quantity}</td>
                                  <td>{item.price}</td>
                                  <td rowSpan={order.shopping_cart.length}>{order.order_date}</td>
                                  <td rowSpan={order.shopping_cart.length}>{getStatus(order.status)}</td>
                                  <td rowSpan={order.shopping_cart.length}>
                                    {getStatus(order.status) === "SUBMITTED" && (
                                      <>
                                        <button
                                          className="btn btn-primary"
                                          onClick={() => handleButtonClick(order, 2)}
                                        >
                                          Confirm
                                        </button>
                                        <button
                                          className="btn"
                                          onClick={() => handleButtonClick(order, 5)}
                                        >
                                          Decline
                                        </button>
                                      </>
                                    )}
                                    {getStatus(order.status) === "CONFIRMED" && (
                                      <>
                                        <button
                                          className="btn btn-secondary"
                                          onClick={() => handleButtonClick(order, 3)}
                                        >
                                          Ready for Pickup
                                        </button>
                                        <button
                                          className="btn btn-accent"
                                          onClick={() => handleButtonClick(order, 4)}
                                        >
                                          Complete
                                        </button>
                                      </>
                                    )}
                                    {getStatus(order.status) === "READY FOR PICKUP" && (
                                      <>
                                      <button
                                        className="btn btn-accent"
                                        onClick={() => handleButtonClick(order, 4)}
                                      >
                                        Complete
                                      </button>
                                      </>
                                    )}
                                  </td>
                                </>
                              ) : (
                                <>
                                  <td>{item.name}</td>
                                  <td>{item.quantity}</td>
                                  <td>{item.price}</td>
                                </>
                              )}
                            </tr>
                          ))
                        )}
                    </tbody>
                  ) : (
                    <tr>
                      <td>Loading...</td>
                    </tr>
                  )}
                </table>
              </div>
            </div>
          </div>
    </div>
);
}

export default ChefOrderList
