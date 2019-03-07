import React from 'react'

interface IProps {
  openModal: () => void
  switchTab: (name: string) => void
  activeTab: string
}

const SubNav: React.SFC<IProps> = props => {
  return (
    <div className="tabnav">
      <div className="tabnav__group">
        <div
          onClick={() => props.switchTab('all')}
          className={props.activeTab === 'all' ? 'tablink active' : 'tablink'}
        >
          All devices
        </div>
        <div
          onClick={() => props.switchTab('linked')}
          className={
            props.activeTab === 'linked' ? 'tablink active' : 'tablink'
          }
        >
          Linked
        </div>
        <div
          onClick={() => props.switchTab('unlinked')}
          className={
            props.activeTab === 'unlinked' ? 'tablink active' : 'tablink'
          }
        >
          Unlinked
        </div>
      </div>
      <div className="tabnav__group">
        <div className="tablink" onClick={() => props.openModal()}>
          Add
        </div>
      </div>
    </div>
  )
}

export default SubNav
