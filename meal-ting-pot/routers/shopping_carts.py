from fastapi import APIRouter, Depends, Response, HTTPException
from typing import Union, Optional, List
from queries.shopping_carts import (
    Error,
    ShoppingCartOut,
    ShoppingCartWithCartItemsOut,
    ShoppingCartRepository,
)
from authenticator import authenticator

router = APIRouter()


@router.post("/cart", response_model=Union[ShoppingCartOut, Error])
def create_shopping_cart(
    response: Response,
    repo: ShoppingCartRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    response.status = 400
    return repo.create()


@router.get(
    "/cart/{shopping_cart_id}/items",
    response_model=Union[Optional[List[ShoppingCartWithCartItemsOut]], Error],
)
def get_one_shopping_cart_w_items(
    shopping_cart_id: int,
    response: Response,
    repo: ShoppingCartRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    shopping_cart = repo.get_one_with_cart_items(shopping_cart_id)
    if shopping_cart is None:
        raise HTTPException(status_code=404, detail="shopping cart not found")
    return shopping_cart
