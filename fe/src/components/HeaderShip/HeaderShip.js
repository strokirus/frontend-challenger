import React, { Fragment } from 'react';
import { object } from 'prop-types';
import cssModules from 'react-css-modules';
import styles from './styles.scss';
import ShipRelated from '../ShipRelated/ShipRelated';

const HeaderShip = ({ order, fulfillments }) => (
  <section className={styles.grid}>
    {!order.isLoading ? (
      <Fragment>
        <article>
          <h3 className={styles.title}>Pedido</h3>
          <p className={styles.info}>{order.id}</p>
        </article>

        <article>
          <h3 className={styles.title}>Status</h3>
          <p className={`${styles.info} ${order.status && styles[order.status.toLowerCase()]}`}>{order.status}</p>
        </article>
      </Fragment>
    ) : (
      <article className={styles.loading} />
    )}

    {fulfillments !== undefined && fulfillments.items.length > 0 &&
      <article>
        <h3 className={styles.title}>Entregas relacionadas</h3>
        {fulfillments.items.map((e, i) => (
          <ShipRelated id={e.id} key={i} />
        ))}
      </article>
    }

  </section>
);

HeaderShip.propTypes = {
  order: object.isRequired,
  fulfillments: object.isRequired,
};

HeaderShip.defaultProps = {
};

export default cssModules(HeaderShip, styles, { allowMultiple: true });
