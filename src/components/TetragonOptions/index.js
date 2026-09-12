import React from 'react';

const options = [
  {
    name: 'bpf-debug-area',
    usage: 'Enable BPF tracing messages for specified areas (all, generic, process)',
  },
  {
    name: 'bpf-debug-log',
    defaultValue: 'false',
    usage: 'Enable forwarding BPF trace messages to tetragon log as info messages',
  },
  {
    name: 'bpf-dir',
    defaultValue: 'tetragon',
    usage: "Set tetragon bpf directory (default 'tetragon')",
  },
  {
    name: 'bpf-lib',
    defaultValue: '/var/lib/tetragon/',
    usage: 'Location of Tetragon libs (btf and bpf files)',
  },
  {
    name: 'btf',
    usage: 'Location of btf',
  },
  {
    name: 'cgroup-rate',
    usage: "Base sensor events cgroup rate <events,interval> disabled by default ('1000,1s' means rate 1000 events per second)",
  },
  {
    name: 'cluster-name',
    usage: 'Name of the cluster where Tetragon is installed',
  },
  {
    name: 'config-dir',
    usage: 'Configuration directory that contains a file for each option',
  },
  {
    name: 'cpuprofile',
    usage: 'Store CPU profile into provided file',
  },
  {
    name: 'cri-endpoint',
    usage: 'CRI endpoint',
  },
  {
    name: 'data-cache-size',
    defaultValue: '1024',
    usage: 'Size of the data events cache',
  },
  {
    name: 'debug',
    defaultValue: 'false',
    usage: "Enable debug messages. Equivalent to '--log-level=debug'",
  },
  {
    name: 'deleted-pod-cache-size',
    defaultValue: '1024',
    usage: 'Size of the deleted pod cache',
  },
  {
    name: 'disable-kprobe-multi',
    defaultValue: 'false',
    usage: 'Allow to disable kprobe multi interface',
  },
  {
    name: 'disable-process-cache',
    defaultValue: 'false',
    usage: 'Disable process cache',
  },
  {
    name: 'enable-ancestors',
    defaultValue: '[]',
    usage:
      "Comma-separated list of process event types to enable ancestors for. Supported event types are: base, kprobe, tracepoint, loader, uprobe, lsm, usdt. Unknown event types will be ignored. Type 'base' enables ancestors for process_exec and process_exit events and is required by all other supported event types for correct reference counting. An empty string disables ancestors completely",
  },
  {
    name: 'enable-cgidmap',
    defaultValue: 'false',
    usage: 'enable pod resolution via cgroup ids',
  },
  {
    name: 'enable-cgidmap-debug',
    defaultValue: 'false',
    usage: 'enable cgidmap debugging info',
  },
  {
    name: 'enable-cgtrackerid',
    defaultValue: 'true',
    usage: "enable cgroup tracker id (only used if 'enable-cgidmap' is set)",
  },
  {
    name: 'enable-cri',
    defaultValue: 'false',
    usage: 'enable CRI client for tetragon',
  },
  {
    name: 'enable-deprecated-tracingpolicy-grpc',
    defaultValue: 'false',
    usage: 'Enable deprecated gRPC TracingPolicy APIs',
  },
  {
    name: 'enable-event-metrics',
    defaultValue: 'true',
    usage:
      'Enable per-event metrics. Enabled by default. Health and resource metrics are always available when --metrics-server is set.',
  },
  {
    name: 'enable-export-aggregation',
    defaultValue: 'false',
    usage: 'Enable JSON export aggregation',
  },
  {
    name: 'enable-k8s-api',
    defaultValue: 'false',
    usage: 'Access Kubernetes API to associate Tetragon events with Kubernetes pods',
  },
  {
    name: 'enable-msg-handling-latency',
    defaultValue: 'false',
    usage: 'Enable metrics for message handling latency',
  },
  {
    name: 'enable-pid-set-filter',
    defaultValue: 'false',
    usage: 'Enable pidSet export filters. Not recommended for production use',
  },
  {
    name: 'enable-pod-annotations',
    defaultValue: 'false',
    usage: 'Add pod annotations field to events.',
  },
  {
    name: 'enable-pod-info',
    defaultValue: 'false',
    usage: 'Enable PodInfo custom resource',
  },
  {
    name: 'enable-policy-filter',
    defaultValue: 'false',
    usage: 'Enable policy filter code',
  },
  {
    name: 'enable-policy-filter-cgroup-map',
    defaultValue: 'false',
    usage: 'Enable cgroup mappings for policy filter maps',
  },
  {
    name: 'enable-policy-filter-debug',
    defaultValue: 'false',
    usage: 'Enable policy filter debug messages',
  },
  {
    name: 'enable-process-cred',
    defaultValue: 'false',
    usage: 'Enable process_cred events',
  },
  {
    name: 'enable-process-environment-variables',
    defaultValue: 'false',
    usage:
      'Include environment variables in process_exec events. Disabled by default. Note that this option can significantly increase the size of the events and may impact performance, as well as capture sensitive information such as passwords in the events (you can use --redaction-filters to redact the data).',
  },
  {
    name: 'enable-process-ns',
    defaultValue: 'false',
    usage:
      'Enable namespace information in process_exec and process_kprobe events',
  },
  {
    name: 'enable-tracing-policy-crd',
    defaultValue: 'true',
    usage:
      'Enable TracingPolicy and TracingPolicyNamespaced custom resources',
  },
  {
    name: 'event-cache-retries',
    defaultValue: '15',
    usage: 'Number of retries for event cache',
  },
  {
    name: 'event-cache-retry-delay',
    defaultValue: '2',
    usage: 'Delay in seconds between event cache retries',
  },
  {
    name: 'event-queue-size',
    defaultValue: '10000',
    usage: 'Set the size of the internal event queue.',
  },
  {
    name: 'execve-map-entries',
    defaultValue: '0',
    usage: 'Set entries for execve_map table (default 32768)',
  },
  {
    name: 'execve-map-size',
    usage: 'Set size for execve_map table (allows K/M/G suffix)',
  },
  {
    name: 'export-aggregation-buffer-size',
    defaultValue: '10000',
    usage: 'Aggregator channel buffer size',
  },
  {
    name: 'export-aggregation-window-size',
    defaultValue: '15s',
    usage: 'JSON export aggregation time window',
  },
  {
    name: 'export-allowlist',
    usage: 'JSON export allowlist',
  },
  {
    name: 'export-denylist',
    usage: 'JSON export denylist',
  },
  {
    name: 'export-file-compress',
    defaultValue: 'false',
    usage: 'Compress rotated JSON export files',
  },
  {
    name: 'export-file-max-backups',
    defaultValue: '5',
    usage: 'Number of rotated JSON export files to retain',
  },
  {
    name: 'export-file-max-size-mb',
    defaultValue: '10',
    usage: 'Size in MB for rotating JSON export files',
  },
  {
    name: 'export-file-perm',
    defaultValue: '600',
    usage: 'Access permissions on JSON export files',
  },
  {
    name: 'export-file-rotation-interval',
    defaultValue: '0s',
    usage:
      'Interval at which to rotate JSON export files in addition to rotating them by size',
  },
  {
    name: 'export-filename',
    usage: 'Filename for JSON export. Disabled by default',
  },
  {
    name: 'export-rate-limit',
    defaultValue: '-1',
    usage:
      'Rate limit (per minute) for event export. Set to -1 to disable rate limiting, 0 to disable JSON export, or a positive integer to rate limit event export',
  },
  {
    name: 'expose-stack-addresses',
    defaultValue: 'false',
    usage: 'Expose real linear addresses in events stack traces',
  },
  {
    name: 'field-filters',
    usage: 'Field filters for event exports',
  },
  {
    name: 'filter-environment-variables',
    defaultValue: '[]',
    usage: 'Filter for specific environment variables',
  },
  {
    name: 'force-large-progs',
    defaultValue: 'false',
    usage: 'Force loading large programs, even in kernels with < 5.3 versions',
  },
  {
    name: 'force-small-progs',
    defaultValue: 'false',
    usage: 'Force loading small programs, even in kernels with >= 5.3 versions',
  },
  {
    name: 'generate-docs',
    defaultValue: 'false',
    usage: 'Generate documentation in YAML format to stdout',
  },
  {
    name: 'gops-address',
    usage: "gops server address (e.g. 'localhost:8118'). Disabled by default",
  },
  {
    name: 'health-server-address',
    defaultValue: ':6789',
    usage: "Health server address (e.g. ':6789')(use '' to disabled it)",
  },
  {
    name: 'health-server-interval',
    defaultValue: '10',
    usage: 'Health server interval in seconds',
  },
  {
    name: 'help',
    defaultValue: 'false',
    usage: 'help for tetragon',
  },
  {
    name: 'k8s-controlplane-retry',
    defaultValue: '1',
    usage:
      'Number of attempts for Kubernetes control plane connection (negative for infinite, zero is invalid, positive for max attempts)',
  },
  {
    name: 'k8s-kubeconfig-path',
    usage: 'Absolute path of the kubernetes kubeconfig file',
  },
  {
    name: 'keep-sensors-on-exit',
    defaultValue: 'false',
    usage: 'Do not unload sensors on exit',
  },
  {
    name: 'kernel',
    usage: 'Kernel version',
  },
  {
    name: 'log-file',
    usage:
      'Set log file where tetragon agent logs will be written (in addition to stdout or stderr)',
  },
  {
    name: 'log-format',
    defaultValue: 'text',
    usage: 'Set log format',
  },
  {
    name: 'log-level',
    defaultValue: 'info',
    usage: 'Set log level',
  },
  {
    name: 'memprofile',
    usage: 'Store MEM profile into provided file',
  },
  {
    name: 'metrics-label-filter',
    defaultValue: 'namespace,workload,pod,binary',
    usage:
      'Comma-separated list of enabled metrics labels. Unknown labels will be ignored.',
  },
  {
    name: 'metrics-server',
    usage: "Metrics server address (e.g. ':2112'). Disabled by default",
  },
  {
    name: 'netns-dir',
    defaultValue: '/var/run/docker/netns/',
    usage: 'Network namespace dir',
  },
  {
    name: 'parents-map-enabled',
    defaultValue: 'false',
    usage: 'Enable parents_map for matchParentBinaries selector',
  },
  {
    name: 'parents-map-entries',
    defaultValue: '0',
    usage: 'Set entries for parents_map table (default 32768)',
  },
  {
    name: 'parents-map-size',
    usage: 'Set size for parents_map table (allows K/M/G suffix)',
  },
  {
    name: 'persist-grpc-policies',
    defaultValue: 'false',
    usage:
      'Persist tracing policies installed over gRPC across agent restarts',
  },
  {
    name: 'persist-grpc-policies-dir',
    defaultValue: '/var/run/tetragon/grpc-policies',
    usage:
      'Directory in which to persist tracing policies installed over gRPC',
  },
  {
    name: 'pprof-address',
    usage:
      "Serves runtime profile data via HTTP (e.g. 'localhost:6060'). Disabled by default",
  },
  {
    name: 'process-cache-gc-interval',
    defaultValue: '30s',
    usage: 'Time between checking the process cache for old entries',
  },
  {
    name: 'process-cache-size',
    defaultValue: '65536',
    usage: 'Size of the process cache',
  },
  {
    name: 'procfs',
    defaultValue: '/proc/',
    usage: 'Location of procfs to consume existing PIDs',
  },
  {
    name: 'rb-queue-size',
    defaultValue: '65535',
    usage:
      'Set size of channel between ring buffer and sensor go routines (default 65k, allows K/M/G suffix)',
  },
  {
    name: 'rb-size',
    defaultValue: '0',
    usage:
      'Set ring buffer size for single cpu (default 65k, allows K/M/G suffix)',
  },
  {
    name: 'rb-size-total',
    defaultValue: '0',
    usage:
      'Set ring buffer size in total for all cpus (default 65k per cpu, allows K/M/G suffix)',
  },
  {
    name: 'redaction-filters',
    usage: 'Redaction filters for events',
  },
  {
    name: 'release-pinned-bpf',
    defaultValue: 'true',
    usage:
      'Release all pinned BPF programs and maps in Tetragon BPF directory. Enabled by default. Set to false to disable',
  },
  {
    name: 'retprobes-cache-size',
    defaultValue: '4096',
    usage: 'Set {k,u}retprobes events cache maximum size',
  },
  {
    name: 'server-address',
    defaultValue: 'localhost:54321',
    usage:
      "gRPC server address (e.g. 'localhost:54321' or 'unix:///var/run/tetragon/tetragon.sock'). An empty address disables the gRPC server. WARNING: Exposing gRPC on a TCP socket without TLS client verification exposes Tetragon to unprivileged users on the host or with network access.",
  },
  {
    name: 'server-tls-cert-file',
    usage:
      'Path to a PEM-encoded server certificate. When set, TLS is enabled on the TCP gRPC listener.',
  },
  {
    name: 'server-tls-client-ca-files',
    defaultValue: '[]',
    usage:
      'Paths to PEM-encoded CA bundles used to verify client certificates. Required when --server-tls-require-client-cert is true.',
  },
  {
    name: 'server-tls-key-file',
    usage:
      'Path to the PEM-encoded private key matching --server-tls-cert-file. Required when --server-tls-cert-file is set.',
  },
  {
    name: 'server-tls-require-client-cert',
    defaultValue: 'false',
    usage:
      'Require and verify client certificates (mTLS). Requires --server-tls-client-ca-files.',
  },
  {
    name: 'sleepable-offload-size',
    defaultValue: '32768',
    usage:
      'Set the maximum number of entries in the sleepable offload map',
  },
  {
    name: 'sleepable-preload-size',
    defaultValue: '32768',
    usage:
      'Set the maximum number of entries in the sleepable preload map',
  },
  {
    name: 'tracing-policy',
    usage: 'Tracing policy file to load at startup',
  },
  {
    name: 'tracing-policy-dir',
    defaultValue: '/etc/tetragon/tetragon.tp.d',
    usage: 'Directory from where to load Tracing Policies',
  },
  {
    name: 'use-perf-ring-buffer',
    defaultValue: 'false',
    usage: 'Use the perf ring buffer instead of the bpf ring buffer',
  },
  {
    name: 'username-metadata',
    defaultValue: 'disabled',
    usage:
      'Resolve UIDs to user names for processes running in host namespace',
  },
  {
    name: 'verbose',
    defaultValue: '0',
    usage: 'deprecated alias for --verifier-log-level',
  },
  {
    name: 'verifier-log-level',
    defaultValue: '0',
    usage:
      'set eBPF verifier log level. Pass 0 for silent, 1 for truncated logs, 2 for a full dump',
  },
];

export default function TetragonOptions() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Usage</th>
            <th>Default Value</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option) => (
            <tr key={option.name}>
              <td>
                <code>--{option.name}</code>
              </td>
              <td>{option.usage}</td>
              <td>
                {option.defaultValue ? <code>{option.defaultValue}</code> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}