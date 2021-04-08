import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router'

export default function BlogDetails() {
    const {id} = useParams()

    return (
        <Grid container  spacing={4}>
            <Grid item xs={12}>
                <Typography variant='h3'>
                    Blog {id}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">
                    Posted on: May 1st, 2021
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante eu purus iaculis vestibulum. Mauris porttitor ipsum mi, at congue leo gravida vel. Sed magna tellus, porttitor in ultrices ut, ultricies tristique magna. Phasellus urna dui, pulvinar eget ligula vitae, finibus hendrerit augue. Nam non elementum lectus, sit amet fermentum ante. Quisque id nisi nunc. Praesent aliquet libero ac ante ornare volutpat. Aliquam ut justo tortor. Donec pharetra est eget lacus fermentum faucibus vel vel felis. Quisque euismod et ligula eu tincidunt. Nam ut posuere mauris. Pellentesque accumsan tincidunt dolor nec tempor. Suspendisse potenti. Ut feugiat porttitor erat et faucibus. Donec nec ipsum lorem. Curabitur id placerat lectus.

                    Nam ut metus in nibh sagittis imperdiet. Ut ultrices mi neque, elementum condimentum ligula aliquam eu. Aliquam erat volutpat. Vivamus ac luctus arcu, at varius nunc. Suspendisse id urna non est ultrices malesuada. Sed blandit dui elit, quis posuere leo tincidunt sit amet. Curabitur vitae aliquam justo, sed rutrum augue. Sed non enim gravida, pulvinar velit ut, dictum metus. Donec tristique porta tellus, sit amet laoreet felis euismod et. Sed ornare nec orci vel convallis. Cras mi ipsum, imperdiet sed justo in, laoreet rutrum elit. Cras sollicitudin magna libero, sed sagittis nisl lacinia vel. Quisque eget orci purus. Cras condimentum enim sed consectetur vestibulum. Sed egestas libero metus, a mollis lacus blandit a. Aliquam maximus odio massa, in laoreet nisl ultrices et.

                    Donec egestas purus eget vehicula elementum. Vestibulum fringilla ante eros. Cras id vestibulum erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ornare lacus vel lacus bibendum efficitur. Pellentesque quis risus venenatis, rutrum erat id, consequat enim. Etiam facilisis pretium risus, vel volutpat dolor convallis in. Ut ac ultrices eros. Nunc egestas ex ex, at laoreet leo interdum sit amet. Integer vehicula velit tellus, eget consectetur magna sollicitudin in. Vestibulum eget orci eros. Donec et diam eget purus iaculis iaculis.
                </Typography>
            </Grid>
        </Grid>
    )
}
