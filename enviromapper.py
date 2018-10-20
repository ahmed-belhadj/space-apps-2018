#!/usr/bin/env python3

import pandas as pd
globe_file = 'GLOBEMeasurementData-9252.csv'
colnames = [' latitude', ' longitude', ' measured_on', ' nitrates:nitrate and nitrite (mgl)']
df_ndata = pd.read_csv(globe_file, sep=',', usecols=colnames)
df_ndata.columns = df_ndata.columns.str.strip()
j_data = df_ndata.to_json('nitrate_place_data.json', orient='records')



# if __name__ == "__main__":
#     import argparse
#
#     parser = argparse.ArgumentParser(
#         description='get data from map to return nitrate data')
#     parser.add_argument('year', type=int, help='year')

