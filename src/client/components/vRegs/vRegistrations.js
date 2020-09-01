import React, { Component } from 'react'

class SingleReg extends Component {
    render(){
        const { vreg } = this.props;
        return(
            <div className="col-lg-6 col-sm-12">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">
                        Registration Number: <strong className="text-info text-uppercase">{vreg.key}</strong></h4>
                </div>
                <div className="card-content">
                    <div className="card-body">
                        <ul className="activity-timeline timeline-left list-unstyled">
                            <li>
                                <div className="timeline-icon bg-primary">
                                    <i className="feather icon-plus font-medium-2"></i>
                                </div>
                                <div className="timeline-info">
                                    <p className="font-weight-bold">Task Added</p>
                                    <span>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</span>
                                </div>
                                <small className="">25 days ago</small>
                            </li>
                            <li>
                                <div className="timeline-icon bg-warning">
                                    <i className="feather icon-alert-circle font-medium-2"></i>
                                </div>
                                <div className="timeline-info">
                                    <p className="font-weight-bold">Task Updated</p>
                                    <span>Cupcake gummi bears soufflé caramels candy</span>
                                </div>
                                <small className="">15 days ago</small>
                            </li>
                            <li>
                                <div className="timeline-icon bg-success">
                                    <i className="feather icon-check font-medium-2"></i>
                                </div>
                                <div className="timeline-info">
                                    <p className="font-weight-bold">Task Completed</p>
                                    <span>Candy ice cream cake. Halvah gummi bears
                                    </span>
                                </div>
                                <small className="">20 minutes ago</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default class VRegistrations extends Component {
  render() {
    const { vregs } = this.props;
    return (
      <section id="timeline-card">
        <div className="row">
          {vregs.map((reg, i) => (
            <SingleReg key={i} vreg={reg} />
          ))}
        </div>
      </section>
    );
  }
}