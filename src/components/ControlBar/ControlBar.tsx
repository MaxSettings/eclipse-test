import React, { FC } from 'react';
import classNames from 'classnames/dedupe';
import { cn } from 'src/helpers/bem';
import { Props } from './props';
import './styles.scss';
import { Input, Radio, Space } from 'antd';
import { TypesList } from 'src/types/TypesList';
import { Tag } from 'src/components/Tag/Tag';
import { getTagColorByType } from 'src/helpers/getTagColorByType';

const b = cn('control-bar');

export const ControlBar: FC<Props> = (props) => {
  const {
    className,
    searchValue,
    onSearchChange,
    countPerPage,
    onCountPerPageChange,
    activeTypes,
    setActiveTypes,
  } = props;

  return (
    <div className={classNames(b(), className)}>
      <Input
        rootClassName={b('search')}
        placeholder="Search..."
        value={searchValue}
        onChange={onSearchChange}
      />

      <div className={b('radio-wrap')}>
        <h4 className={b('subtitle')}>Show on page:</h4>
        <Radio.Group onChange={onCountPerPageChange} value={countPerPage}>
          <Space direction="horizontal" className={b('radio-buttons')}>
            <Radio value={1}>10 pokemons</Radio>
            <Radio value={2}>20 pokemons</Radio>
            <Radio value={3}>50 pokemons</Radio>
          </Space>
        </Radio.Group>
      </div>

      <div className={b('type-block')}>
        <h4 className={b('subtitle')}>Select Type</h4>
        <ul className={b('types')}>
          {Object.values(TypesList).map((type, index) => {
            return (
              <li key={index} className={b('type')}>
                <button
                  className={b('button')}
                  onClick={() => {
                    setActiveTypes((prevState) => {
                      if (activeTypes.includes(type)) {
                        return prevState.filter((it) => {
                          return it !== type;
                        });
                      } else {
                        return [...prevState, type];
                      }
                    });
                  }}
                >
                  <Tag text={type} color={getTagColorByType(type)} />
                  {activeTypes.includes(type) && <span className={b('mark')} />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
