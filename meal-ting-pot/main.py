from fastapi import FastAPI
from authenticator import authenticator
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import (
    menu_items,
    accounts,
    shopping_carts,
    user_profile,
    cart_items,
    orders,
    social_media,
    tags,
)

tags_metadata = [
    {
        "name": "AUTHENTICATOR",
    },
    {
        "name": "MENU ITEMS",
    },
    {
        "name": "PROFILE PAGE",
    },
    {
        "name": "SOCIAL MEDIA",
    },
    {
        "name": "SHOPPING CART",
    },
    {
        "name": "CART ITEMS",
    },
    {
        "name": "ORDERS",
    },
    {
        "name": "TAGS",
    },
]

app = FastAPI(openapi_tags=tags_metadata)
app.include_router(menu_items.router, tags=["MENU ITEMS"])
app.include_router(authenticator.router, tags=["AUTHENTICATOR"])
app.include_router(accounts.router, tags=["AUTHENTICATOR"])
app.include_router(user_profile.router, tags=["PROFILE PAGE"])
app.include_router(shopping_carts.router, tags=["SHOPPING CART"])
app.include_router(cart_items.router, tags=["CART ITEMS"])
app.include_router(orders.router, tags=["ORDERS"])
app.include_router(social_media.router, tags=["SOCIAL MEDIA"])
app.include_router(tags.router, tags=["TAGS"])

origins = [os.environ.get("CORS_HOST"), "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
