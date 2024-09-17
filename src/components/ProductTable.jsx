import React from 'react';
import Table from './Table';

const ProductTable = () => {
  return (
    <div>
        <Table.TableContainer>
        <Table.THead>
            <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
            </Table.Row>
        </Table.THead>

        <Table.TBody>
            <Table.Row>
                <Table.ColumnHeader colspan="2">Sporting Goods</Table.ColumnHeader>
            </Table.Row>
            <Table.Row>
                <Table.Column>Football</Table.Column>
                <Table.Column>$55.00</Table.Column>
            </Table.Row>
            <Table.Row>
                <Table.Column>Baseball</Table.Column>
                <Table.Column>$48.00</Table.Column>
            </Table.Row><Table.Row>
                <Table.Column>Basketball</Table.Column>
                <Table.Column>$40.00</Table.Column>
            </Table.Row>
            <Table.Row>
                <Table.ColumnHeader colspan="2">Electronics</Table.ColumnHeader>
            </Table.Row>
            <Table.Row>
                <Table.Column>iPhone</Table.Column>
                <Table.Column>$399.00</Table.Column>
            </Table.Row>
        </Table.TBody>
        </Table.TableContainer>
    </div>
  );
};

export default ProductTable;
