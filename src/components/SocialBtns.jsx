import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SocialBtns({ variant, socialBtns }) {
  return (
    <div
      className={`social-icon ${variant ? variant : ''}`}
      data-aos="zoom-in"
      data-aos-duration="1200"
      data-aos-delay="300"
    >
      {socialBtns?.map((item, index) => (
        <Link
          className={item.iconBgClass}
          to={item.href}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={item.icon} />
        </Link>
      ))}

      <style jsx="true">{`
        .social-icon a {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          border-radius: 50%;
          margin-right: 15px;
          transition: all 0.3s ease;
          color: #fff;
        }

        .social-icon a:last-child {
          margin-right: 0;
        }

        .social-icon .instagram {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        }

        .social-icon .github {
          background: #24292e;
        }

        .social-icon .linkedin {
          background: #0077b5;
        }

        .social-icon a:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
