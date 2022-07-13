import { CartContext } from "../../providers/Cart";
import { useContext } from "react";

const AddCartSVG = ({ product }) => {
  const { cart, postCart } = useContext(CartContext);

  return (
    <button
      style={{ cursor: "pointer", backgroundColor: "transparent", border: 0 }}
      onClick={() => {
        postCart(product);
      }}
    >
      <svg
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="14.8101"
          cy="15.467"
          rx="14.75"
          ry="14.6452"
          fill="#F57C00"
        />
        <path
          d="M20.4416 17.7871H12.6346L12.8089 18.6658H19.9574C20.3675 18.6658 20.6715 19.0585 20.5806 19.4709L20.4337 20.1375C20.9315 20.3867 21.2747 20.9128 21.2747 21.5217C21.2747 22.3785 20.5951 23.0716 19.7614 23.0592C18.9671 23.0475 18.3139 22.3829 18.2925 21.5641C18.2808 21.1169 18.4546 20.7115 18.74 20.4232H13.1567C13.433 20.7024 13.6047 21.0913 13.6047 21.5217C13.6047 22.3952 12.8982 23.0987 12.0422 23.0577C11.2822 23.0213 10.664 22.3881 10.624 21.6046C10.5932 20.9996 10.902 20.4663 11.3711 20.1881L9.50029 10.7574H7.63917C7.28616 10.7574 7 10.4624 7 10.0984V9.65903C7 9.29506 7.28616 9 7.63917 9H10.3697C10.6733 9 10.9351 9.22025 10.9959 9.52695L11.24 10.7574H21.7006C22.1107 10.7574 22.4147 11.1501 22.3238 11.5625L21.0649 17.2742C20.9987 17.5742 20.74 17.7871 20.4416 17.7871ZM17.8658 13.6132H16.5875V12.5149C16.5875 12.2722 16.3967 12.0755 16.1614 12.0755H15.7353C15.4999 12.0755 15.3092 12.2722 15.3092 12.5149V13.6132H14.0308C13.7955 13.6132 13.6047 13.8099 13.6047 14.0526V14.492C13.6047 14.7346 13.7955 14.9313 14.0308 14.9313H15.3092V16.0297C15.3092 16.2724 15.4999 16.4691 15.7353 16.4691H16.1614C16.3967 16.4691 16.5875 16.2724 16.5875 16.0297V14.9313H17.8658C18.1012 14.9313 18.2919 14.7346 18.2919 14.492V14.0526C18.2919 13.8099 18.1012 13.6132 17.8658 13.6132Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default AddCartSVG;
